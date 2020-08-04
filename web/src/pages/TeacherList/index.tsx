import "./styles.css";

import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";
import React from "react";
import { TeacherItem } from "../../components/TeacherItem/index";

export function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available Proffys">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Day of the week</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Day</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem></TeacherItem>
      </main>
    </div>
  );
}
