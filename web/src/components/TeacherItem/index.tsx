import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/48604291?s=400&v=4" alt="Avatar"/>
                        <div>
                            <strong>Chuks Iloegbunam</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    <br/>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}


export default TeacherItem;