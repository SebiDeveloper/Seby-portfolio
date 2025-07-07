import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

import Spinner from "../../components/spinner/Spinner";

// import I from "../../assets/images/contact/I.jpg";
const I: string = ("../../assets/images/contact/I.jpg");

import "./Contact.scss";

interface FormData {
    name: string;
    email: string;
    textarea: string;
}

const Contact: React.FC = () => {
    const { register, handleSubmit, formState, reset} = useForm<FormData>({
        mode: "onChange",
    });

    const [message, setMessage] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false); //


    const nameError = formState.errors["name"]?.message;
    const emailError = formState.errors["email"]?.message;
    const textareaError = formState.errors["textarea"]?.message;

    const validateName = (value: string): true | string => {
        const regex = /^[A-Za-z ]*$/;
        if (value.length > 20) {
            return "Maximum 20 letters"
        }
        if (!regex.test(value)) {
          return "Only letters are allowed";
        }
        if (!value.trim()) {
            return "This field is required";
        }
        if (value.trim().length < 3) {
          return "At least 3 letters";
        }
        return true;
      };

    const validateTextarea = (value: string): true | string => {
        if (value.length > 200) {
            return "Maximum 200 letters or characters";
        }
        if (!value) {
            return "This field is required";
        }
        if (value.length < 10) {
            return "At least 10 letters or characters";
          }
        return true;
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsLoading(true);
        setMessage("");
        try {
            await emailjs.send(
                "service_yuyl3a8",  // 8
                "template_fouqthl",
                {
                    name: data.name,
                    email: data.email,
                    message: data.textarea,
                },
                "fyhrkF0enWUFv8E1H"
            );

            setTimeout(() => {
                setIsLoading(false);
                reset();
                setMessage("Message sent successfully. I will contact you shortly!");
                setIsError(false);
            }, 2000);

        } catch (error) {
            setTimeout(() => {
                setIsLoading(false);
                reset();
                setMessage("Something went wrong! Please try again.");
                setIsError(true);
            }, 2000);
        }
    };


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="contact">

        <Helmet>
            <title>Contact</title>
            <meta name="description" content="I'm Seby, a front-end developer, contact me" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Sebastian" />
            <meta name="keywords" content="portfolio, front-end developer, react, javascript, websites, seby" />
        </Helmet>

            <div className="contact__photo">
                <img src={I} alt="I" className="contact__img" />
            </div>

            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="contact__title">Write to me and I will contact you!</h2>

                {/* Nume */}
                <div className="contact__row">
                    <div className="contact__group">
                    <input
                        type="text"
                        className="contact__input"
                        placeholder=" "
                        {...register("name", {
                        validate: validateName,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            // Limitează la max 20 caractere
                            if (e.target.value.length > 20) {
                            e.target.value = e.target.value.slice(0, 20);
                            }
                        },
                        })}
                    />
                    <label className="contact__label">Name</label>
                    </div>
                </div>
                {nameError && <p className="contact__error">{nameError}</p>}

                {/* Email */}
                <div className="contact__row">
                    <div className="contact__group">
                    <input
                        type="email"
                        className="contact__input"
                        placeholder=" "
                        {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                        },
                        })}
                    />
                    <label className="contact__label">Email</label>
                    </div>
                </div>
                {emailError && <p className="contact__error">{emailError}</p>}

                {/* Mesaj */}
                <div className="contact__row">
                    <div className="contact__group">
                    <textarea
                        className="contact__textarea"
                        placeholder=" "
                        {...register("textarea", {
                        validate: validateTextarea,
                        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            // Limitează la max 200 caractere
                            if (e.target.value.length > 200) {
                            e.target.value = e.target.value.slice(0, 200);
                            }
                        },
                        })}
                    />
                    <label className="contact__label">Message</label>
                    </div>
                </div>
                {textareaError && <p className="contact__error">{textareaError}</p>}

                {/* Buton / Spinner */}
                {!isLoading ? (
                    <button className="contact__btn text-upper" type="submit">
                    Send
                    </button>
                ) : (
                    <Spinner />
                )}

                {/* Mesaj de status */}
                {message && (
                    <div className={`contact__message ${isError ? "contact__error-sent" : "contact__success"}`}>
                    {message}
                    </div>
                )}
            </form>
        </div>
    )
};

export default Contact;