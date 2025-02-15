// Создаем массив случайных оценок для 12 студентов
const grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);

console.log("Оценки студентов:", grades);

//Рассчитываем средний балл
let sum = 0;
grades.forEach((grade) => {
  sum += grade;
});
const average = sum / grades.length;
console.log("Средний балл:", average.toFixed(2));

// Находим максимальный  и минимальный балл
let maxGrade = grades[0];
let minGrade = grades[0];

grades.forEach((grade) => {
  if (grade > maxGrade) {
    maxGrade = grade;
  }
  if (grade < minGrade) {
    minGrade = grade;
  }
});

console.log("Максимальный балл:", maxGrade);
console.log("Минимальный балл:", minGrade);

//Считаем количество студентов с положительными и отрицательными оценками
let positiveGrades = 0;
let negativeGrades = 0;

grades.forEach((grade) => {
  if (grade >= 60) {
    positiveGrades++;
  } else {
    negativeGrades++;
  }
});

console.log("Количество студентов с положительной оценкой:", positiveGrades);
console.log("Количество студентов с отрицательной оценкой:", negativeGrades);

// Преобразуем числовые оценки в буквенные
const letterGrades = grades.map((grade) =>
  grade >= 80
    ? "A"
    : grade >= 60
    ? "B"
    : grade >= 40
    ? "C"
    : grade >= 20
    ? "D"
    : "E"
);

console.log("Буквенные оценки:", letterGrades);
