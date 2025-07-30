import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import LessonPage from "./LessonPage";
import DynamicQuizPage from "./DynamicQuizPage";
import { lessons } from "./data/lessonData";
import { badges } from "./data/badges";

function HtmlCourseApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [xp, setXp] = useState(0);
  const [badgesEarned, setBadgesEarned] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("htmlCourseProgress");
    if (saved) {
      const { xp: savedXp, completedLessons: savedLessons } = JSON.parse(saved);
      setXp(savedXp);
      setCompletedLessons(savedLessons);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      "htmlCourseProgress",
      JSON.stringify({ xp, completedLessons })
    );

    const earned = badges.filter(
      (badge) => xp >= badge.xpRequired && !badgesEarned.includes(badge.id)
    );
    if (earned.length > 0) {
      setBadgesEarned((prev) => [...prev, ...earned.map((b) => b.id)]);
    }
  }, [xp, completedLessons]);

  const handleStartLesson = (id) => {
    const lesson = lessons.find((l) => l.id === id);
    setCurrentLesson(lesson);
    setCurrentPage("lesson");
  };

  const handleGoToQuiz = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentPage("quiz");
  };

  const handleQuizComplete = (score) => {
    if (!completedLessons.includes(currentLesson.id)) {
      setXp((prev) => prev + currentLesson.xp);
      setCompletedLessons((prev) => [...prev, currentLesson.id]);
    }
    setCurrentPage("home");
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in">
        {currentPage === "home" && (
          <HomePage
            onStartLesson={handleStartLesson}
            onGoToQuiz={handleGoToQuiz}
            lessons={lessons}
            completedLessons={completedLessons}
            xp={xp}
            badgesEarned={badgesEarned}
            badgesData={badges}
          />
        )}
        {currentPage === "lesson" && (
          <LessonPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("home")}
            onGoToQuiz={() => setCurrentPage("quiz")}
          />
        )}
        {currentPage === "quiz" && (
          <DynamicQuizPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("lesson")}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  );
}

export default HtmlCourseApp;
