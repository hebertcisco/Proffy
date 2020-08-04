import './styles.css'

import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
export function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/45374044?s=460&u=d95e9a7efaee1aced34f4b9d9510e7bd663c4985&v=4"
          alt="Hebert Cisco"
        />
        <div>
          <strong>Hebert Cisco</strong>
          <span>Physics</span>
        </div>
      </header>
      <p>
        I had not yet realized, as a student, that a deeper knowledge of the
        basic principles of physics was directly linked to more complex
        mathematical methods.
      </p>
      <footer>
        <p>
          Price per hour<strong>{`${20}$`}</strong>
        </p>

        <button>
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Get in touch.
        </button>
      </footer>
    </article>
  );
}
