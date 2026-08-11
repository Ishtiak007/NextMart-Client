//  Solution of Problem-1
function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    Array.isArray(student) ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}


//  Solution of Problem-2
function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (let i = 0; i < users.length; i++) {
    if (typeof users[i] !== "object" || users[i] === null || !("isActive" in users[i])) {
      return "Invalid";
    }
  }

  return users.filter(user => user.isActive === true);
}


//  Solution of Problem-3
function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");
  let hashtagCount = 0;
  let longestTag = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("#")) {
      hashtagCount++;
      const tag = words[i].slice(1);
      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return { hashtagCount: hashtagCount, longestTag: longestTag };
}


//  Solution of Problem-4
function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] !== "number") {
      return "Invalid";
    }
  }

  return scores.map(score => score + 10).reduce((sum, current) => sum + current, 0);
}


//  Solution of Problem-5
function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }
  if (students.length === 0) {
    return "Invalid";
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (
      typeof student !== "object" ||
      student === null ||
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter(student => {
    return student.score >= 70;
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });

  return names.slice(0, 3);
}