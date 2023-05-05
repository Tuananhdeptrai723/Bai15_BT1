import { useForm } from "react-hook-form";

export default function MedicalForm() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /// add function when value change

    const handSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <div className="container">
            <h1 style={{ color: "blue" }}>Medical Form</h1>
            <form onSubmit={handleSubmit(handSubmit)}>
                <p>Full name:</p>
                <input
                    {...register("name", {
                        required: "Required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                        },
                    })}
                />
                {errors?.name && <div> {errors?.name?.message}</div>}
                <p>Address:</p>
                <input
                    {...register("address", {
                        required: "Required",
                        minLength: {
                            value: 3,
                            message: "Address must be at least 3 characters",
                        },
                    })}
                />
                {errors?.address && <div> {errors?.address?.message}</div>}
                <p>Phone number:</p>
                <input
                    {...register("phoneNumber", {
                        required: "Required",
                        minLength: {
                            value: 10,
                            message: "Phone number must be at least 10 characters",
                        },
                    })}
                />
                {errors?.phoneNumber && <div> {errors?.phoneNumber?.message}</div>}
                <p>Email:</p>
                <input
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
                {errors?.email && <div> {errors?.email?.message}</div>}
                {/* What symptoms have you had in the past 14 days? with some check box symptoms values*/}
                <p>What symptoms have you had in the past 14 days?</p>
                <input
                    type="checkbox"
                    name="in14day"
                    value="Fever or chills"
                    {...register("in14day", {
                        required: "Required",
                    })}
                />
                <label>Fever or chills</label>
                <br />
                <input
                    type="checkbox"
                    name="in14day"
                    value="Cough"
                    {...register("in14day", {
                        required: "Required",
                    })}
                />
                <label>Cough</label>
                <br />
                <input
                    type="checkbox"
                    name="in14day"
                    value="Shortness of breath or difficulty breathing"
                    {...register("in14day", {
                        required: "Required",
                    })}
                />
                <label>Shortness of breath or difficulty breathing</label>

                <br />


                {/* Submit */}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}