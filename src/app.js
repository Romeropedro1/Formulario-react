import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import "./styles.css";

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData, null, 2));
    reset(); // reseta os campos depois do submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header />

      <label>Nome *</label>
      <input
        {...register("firstName", { required: "O nome é obrigatório" })}
        placeholder="Digite seu nome"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label>Opção *</label>
      <select
        {...register("category", { required: "Selecione uma opção" })}
        defaultValue=""
      >
        <option value="">Selecione...</option>
        <option value="A">Opção A</option>
        <option value="B">Opção B</option>
      </select>
      {errors.category && <p>{errors.category.message}</p>}

      <label>Sobre você *</label>
      <textarea
        {...register("aboutYou", {
          required: "Conte algo sobre você",
          minLength: {
            value: 10,
            message: "Conte pelo menos 10 caracteres",
          },
        })}
        placeholder="Fale um pouco sobre você"
      />
      {errors.aboutYou && <p>{errors.aboutYou.message}</p>}

      <input type="submit" value="Enviar" />

      <p style={{ color: "white", whiteSpace: "pre-wrap" }}>{data}</p>
    </form>
  );
}

export default App;
