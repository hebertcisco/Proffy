import "./styles.scss";

import React, { useState } from "react";

import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import WarningIcon from "../../assets/images/icons/warning.svg";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

export function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function handleCreateClass(e: React.FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        console.log("Successful registration");
        history.push("/");
      })
      .catch(() => {
        console.log("Registration error!");
      });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    setScheduleItems(
      scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      })
    );
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing that you want to teach."
        description="The first step is to fill out this application form."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar (URL)"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Select
              name="subject"
              label="subject"
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
            <Input
              name="cost"
              label="Cost of your hour per class"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available Hours
              <button type="button" onClick={addNewScheduleItem}>
                + New Schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="week_day"
                  label="Day of the week"
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, "week_day", e.target.value)
                  }
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
                  name="from"
                  label="From"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, "from", e.target.value)
                  }
                />

                <Input
                  name="to"
                  label="To"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, "to", e.target.value)
                  }
                />

                <br />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso Importante" />
              Important! <br />
              Fill in all the details
            </p>

            <button type="submit">Save Registration</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
