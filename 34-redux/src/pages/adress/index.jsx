import { useState } from "react";
import styles from "./adress.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAdress } from "../../redux/user/slice";

export function Address() {
  const dispatch = useDispatch();
  const [addressName, setAddressName] = useState("");
  const [addressNumber, setAddressNumber] = useState("");

  function handleRegisterAddress() {
    dispatch(
      addAdress({
        location: addressName,
        number: addressNumber,
      })
    );
    console.log(addressName, addressNumber);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <div>
            <Link to="/painel">Voltar para o painel</Link>
          </div>

          <section className={styles.address}>
            <h2>Meu endereço:</h2>

            <input
              type="text"
              className={styles.input}
              placeholder="Ex: Rua centro, x"
              value={addressName}
              onChange={(e) => setAddressName(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Numero"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />

            <button className={styles.button} onClick={handleRegisterAddress}>
              Salvar Alteração
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
