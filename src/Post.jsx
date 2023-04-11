import { Header } from "./components/Header";

export function Post(props) {

    return (
        <div>

            <strong> {props.autor}</strong>
            <p>{props.texto}</p>
        </div>

    )
}
