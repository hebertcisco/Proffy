import "./styles.scss";

import React from "react";
import WhatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import { api } from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

export const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
}: TeacherItemProps) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Price/hour
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          rel="noreferrer"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Get in touch
        </a>
      </footer>
    </article>
  );
};
