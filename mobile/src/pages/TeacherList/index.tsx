import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import AsyncStorage from "@react-native-community/async-storage";
import { Feather } from "@expo/vector-icons";
import PageHeader from "../../components/PageHeader";
import api from "../../services/api";
import styles from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Available Proffs"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchFrom}>
            <Text style={styles.label}>Matter</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="What's the matter?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Day of the week</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeek_day(text)}
                  placeholder="Week day?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Schedule</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Hour?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFilterSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
