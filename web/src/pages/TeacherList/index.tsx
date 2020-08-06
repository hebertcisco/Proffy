import "./styles.scss";

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Teacher, TeacherItem } from "../../components/TeacherItem";

import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

export function TeacherList() {
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: React.FormEvent) {
    e.preventDefault();

    if (!(subject === "") && !(weekDay === "") && !(time === "")) {
      const response = await api.get("classes", {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      });

      console.log(response.data);

      setTeachers(response.data);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys">
        <form id="search-teachers" onChange={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Chemistry", label: "Chemistry" },
              { value: "Mathematics", label: "Mathematics" },
              { value: "English", label: "English" },
              { value: "Geography", label: "Geography" },
              { value: "History", label: "History" },
              { value: "Spanish", label: "Spanish" },
            ]}
          />

          <Select
            name="week_day"
            label="Day of the week"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hour"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}
