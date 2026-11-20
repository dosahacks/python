// ==========================================================================
// Python Programming Laboratory Manual — Experiments Data
// Extracted directly from Second-Year Computer Science and Engineering Manual
// Yashoda Mahadeo Kakade College of Engineering
// ==========================================================================

const EXPERIMENTS = [
  {
    id: 1,
    slug: "exp-1",
    number: "Experiment 01",
    shortNumber: "01",
    category: "Basics & Math",
    categoryKey: "basics",
    title: "Area of a Triangle, Rectangle, and Circle",
    aim: "To write Python statements that calculate the area of a triangle, a rectangle, and a circle.",
    objective: "To practise assigning values to variables, applying mathematical formulas, using arithmetic operators, and displaying calculated results.",
    theory: "The area of a shape is the amount of flat surface enclosed by its boundary. In programming, a mathematical formula can be represented using variables and arithmetic operators. The program stores the required measurements, performs the calculation, and displays the result. For a triangle, the base and perpendicular height are required. The area is half the product of these two measurements (0.5 * base * height). For a rectangle, multiply its length by its breadth (length * breadth). For a circle, multiply pi by the square of the radius (3.14 * radius * radius). Variables such as base, height, length, breadth, and radius make the program readable.",
    algorithm: "1. Start.\n2. Assign values to the base and height of the triangle.\n3. Assign values to the length and breadth of the rectangle.\n4. Assign a value to the radius of the circle.\n5. Calculate each area using its formula.\n6. Display all three results using print().\n7. Stop.",
    applications: "Area calculations are used in construction, interior design, painting, gardening, land measurement, and computer graphics.",
    vivaQuestions: [
      "1. What is a variable?",
      "2. Write the formula for the area of a triangle.",
      "3. Which symbol is used for multiplication in Python?",
      "4. Why is 3.14 used in the circle formula?",
      "5. How would you change the program to use different measurements?"
    ],
    fileName: "area_shapes.py",
    sampleOutput: `Area of Triangle = 25.0
Area of Rectangle = 50
Area of Circle = 153.86`,
    code: `# Experiment 1: Area of a Triangle, Rectangle, and Circle

base = 10
height = 5
length = 10
breadth = 5
radius = 7

triangle = 0.5 * base * height
rectangle = length * breadth
circle = 3.14 * radius * radius

print("Area of Triangle =", triangle)
print("Area of Rectangle =", rectangle)
print("Area of Circle =", circle)
`
  },
  {
    id: 2,
    slug: "exp-2",
    number: "Experiment 02",
    shortNumber: "02",
    category: "Lists & Sets",
    categoryKey: "lists",
    title: "Union of Two Lists",
    aim: "To write a Python program to find the union of two lists.",
    objective: "To understand lists, sets, duplicate removal, and the set union operator.",
    theory: "A list is a Python collection that stores several items in a sequence. Lists keep their order and can contain duplicate values. Sometimes we want to combine two lists while keeping each value only once. This operation is called the union of the lists. Python sets are collections of unique elements. Converting a list to a set with set() removes repeated values. The set union operator | combines the unique elements from both sets. The list() function then converts the set result back into a list. Using sorted() ensures a predictable ascending display order.",
    algorithm: "1. Start.\n2. Create two lists containing some common and some different values.\n3. Convert both lists to sets using set().\n4. Use the | operator to combine the sets.\n5. Sort the result using sorted() and display it as a list.\n6. Stop.",
    applications: "Union is useful when combining unique student IDs from two classes, merging product categories, or combining sets of search results without repeated entries.",
    vivaQuestions: [
      "1. What is a list?",
      "2. What is a set?",
      "3. What does union mean?",
      "4. What is the purpose of the | operator?",
      "5. Why is sorted() used in the program?"
    ],
    fileName: "list_union.py",
    sampleOutput: `Union of two lists: [1, 2, 3, 4, 5, 6]`,
    code: `# Experiment 2: Union of Two Lists

list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

union = list(set(list1) | set(list2))
print("Union of two lists:", sorted(union))
`
  },
  {
    id: 3,
    slug: "exp-3",
    number: "Experiment 03",
    shortNumber: "03",
    category: "Lists & Sets",
    categoryKey: "lists",
    title: "Intersection of Two Lists",
    aim: "To write a Python program to find the intersection of two lists.",
    objective: "To identify common elements using sets and the intersection operator.",
    theory: "The intersection of two collections is the set of elements that occur in both collections. For example, if one list contains [1, 2, 3] and another contains [2, 3, 4], the common elements are 2 and 3. Python provides sets to work with unique values. The set() function converts a list into a set, and the & operator returns only the elements shared by both sets. This is a simple, highly optimized way to find common values without manually comparing every pair of elements.",
    algorithm: "1. Start.\n2. Create two lists.\n3. Convert each list to a set using set().\n4. Use the & operator to find common elements.\n5. Convert the result to a list, sort it with sorted(), and display it.\n6. Stop.",
    applications: "Intersection can identify students enrolled in two courses, common products in two inventories, or shared items across multiple datasets.",
    vivaQuestions: [
      "1. What is intersection?",
      "2. Which operator is used for set intersection?",
      "3. How does a set differ from a list?",
      "4. What is the intersection of [1, 2, 3] and [2, 3, 4]?",
      "5. What happens to duplicate elements when a list is converted to a set?"
    ],
    fileName: "list_intersection.py",
    sampleOutput: `Intersection of two lists: [3, 4]`,
    code: `# Experiment 3: Intersection of Two Lists

list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

common = list(set(list1) & set(list2))
print("Intersection of two lists:", sorted(common))
`
  },
  {
    id: 4,
    slug: "exp-4",
    number: "Experiment 04",
    shortNumber: "04",
    category: "Lists & Loops",
    categoryKey: "lists",
    title: "Remove the i-th Occurrence of a Word from a List",
    aim: "To write a Python program to remove a specified occurrence of a repeated word from a list.",
    objective: "To practise loops, conditional statements, counters, list methods, and the break statement.",
    theory: "A list may contain the same word more than once. The position of an item in a list is called its index (0-indexed). Occurrence counting begins at 1: the first matching word is the first occurrence. To remove a particular occurrence, the program iterates through each item. A counter starts at zero and increments only when the current item matches the target word. When the counter reaches the requested occurrence number i, the program removes that item via list.remove() and executes break to terminate the loop.",
    algorithm: "1. Start.\n2. Create a list containing repeated words.\n3. Set the target word and occurrence number i.\n4. Initialize count to zero.\n5. Visit each word in the list using a for loop.\n6. If the word matches target, increase count by 1.\n7. If count equals i, remove the word and stop the loop with break.\n8. Display the updated list.\n9. Stop.",
    applications: "This technique is useful when editing repeated entries in lists, removing a specific duplicate, or processing a sequence where only one occurrence must be deleted.",
    vivaQuestions: [
      "1. Why does occurrence counting start at 1?",
      "2. What does break do?",
      "3. What does remove() do?",
      "4. What is the difference between a list index and an occurrence number?",
      "5. What happens if the selected occurrence is not present?"
    ],
    fileName: "remove_occurrence.py",
    sampleOutput: `['apple', 'banana', 'mango', 'apple']`,
    code: `# Experiment 4: Remove the i-th Occurrence of a Word from a List

words = ["apple", "banana", "apple", "mango", "apple"]
word = "apple"
i = 2
count = 0

for w in words:
    if w == word:
        count += 1
        if count == i:
            words.remove(w)
            break

print(words)
`
  },
  {
    id: 5,
    slug: "exp-5",
    number: "Experiment 05",
    shortNumber: "05",
    category: "Strings & Search",
    categoryKey: "strings",
    title: "Count the Occurrences of Each Word in a Sentence",
    aim: "To write a Python program to count how many times each word occurs in a sentence.",
    objective: "To use string methods, loops, conditions, and a dictionary to count words.",
    theory: "A string is a sequence of characters. A sentence can be separated into individual words using the split() method, which splits at whitespace by default and returns a list of words. A dictionary stores information as key-value pairs. In this experiment, each distinct word is a key and its occurrence count is the value. When a word is encountered for the first time, it is initialized with count 1. When seen again, its count is incremented by 1 using count[word] += 1.",
    algorithm: "1. Start.\n2. Store a sentence in a string variable.\n3. Split the sentence into words using sentence.split().\n4. Create an empty dictionary count = {}.\n5. For each word in words, if it exists in count, increment count[word] += 1; otherwise, set count[word] = 1.\n6. Display the dictionary.\n7. Stop.",
    applications: "Word counting is a foundational step in text analysis, document statistics, search engine indexing, and natural language processing.",
    vivaQuestions: [
      "1. What does split() return?",
      "2. What is a dictionary?",
      "3. What are keys and values in this program?",
      "4. How can the program treat Python and python as the same word?",
      "5. How could punctuation affect word counting?"
    ],
    fileName: "word_count.py",
    sampleOutput: `{'python': 2, 'is': 2, 'easy': 1, 'and': 1, 'popular': 1}`,
    code: `# Experiment 5: Count the Occurrences of Each Word in a Sentence

sentence = "python is easy and python is popular"
words = sentence.split()
count = {}

for word in words:
    if word in count:
        count[word] += 1
    else:
        count[word] = 1

print(count)
`
  },
  {
    id: 6,
    slug: "exp-6",
    number: "Experiment 06",
    shortNumber: "06",
    category: "Strings & Search",
    categoryKey: "strings",
    title: "Check Whether a Substring Is Present in a String",
    aim: "To write a Python program to check whether a substring is present in a given string.",
    objective: "To understand strings, substrings, membership testing, and conditional statements.",
    theory: "A string is a sequence of characters enclosed in quotes. A substring is a smaller sequence of characters that appears within another string. Python provides the membership operator 'in' to test whether one string occurs inside another. The expression 'substring in string' evaluates to True when the substring is found and False otherwise. An if-else statement uses this boolean result to display a suitable message.",
    algorithm: "1. Start.\n2. Store the main string and the substring to search for.\n3. Use the 'in' operator to check whether the substring occurs in the string.\n4. If found, display 'Substring is present'.\n5. Otherwise, display 'Substring is not present'.\n6. Stop.",
    applications: "Substring checks are used in text search, input validation, keyword filtering, URL routing, and security scanning.",
    vivaQuestions: [
      "1. What is a substring?",
      "2. What does the in operator return?",
      "3. Is substring checking case-sensitive in Python?",
      "4. What happens if the search word is not present?",
      "5. How can you make the search case-insensitive?"
    ],
    fileName: "check_substring.py",
    sampleOutput: `Substring is present`,
    code: `# Experiment 6: Check Whether a Substring Is Present in a String

string = "python programming is easy"
substring = "programming"

if substring in string:
    print("Substring is present")
else:
    print("Substring is not present")
`
  },
  {
    id: 7,
    slug: "exp-7",
    number: "Experiment 07",
    shortNumber: "07",
    category: "Dictionaries",
    categoryKey: "dict",
    title: "Map Two Lists into a Dictionary",
    aim: "To write a Python program to combine two corresponding lists into a dictionary.",
    objective: "To understand dictionaries, key-value pairs, zip(), and dict().",
    theory: "A dictionary is a Python data structure that stores data in key-value pairs. When two lists contain corresponding information, zip() pairs items at identical indices into tuples. The dict() constructor converts these paired tuples into a dictionary where the first list provides the keys and the second list supplies their values. Dictionary keys must be unique; if duplicate keys exist, later values overwrite earlier ones.",
    algorithm: "1. Start.\n2. Create one list of keys and one list of values.\n3. Use zip(keys, values) to pair corresponding elements.\n4. Convert the paired tuples into a dictionary using dict().\n5. Display the dictionary.\n6. Stop.",
    applications: "This method is useful for converting tabular or column data into records, pairing form field names with inputs, and building structured JSON-ready dictionaries.",
    vivaQuestions: [
      "1. What is a dictionary?",
      "2. What does zip() do?",
      "3. Which list provides the keys?",
      "4. What happens when duplicate keys are used?",
      "5. What happens if the two lists have different lengths?"
    ],
    fileName: "map_lists_to_dict.py",
    sampleOutput: `{'name': 'Rahul', 'age': 20, 'city': 'Pune'}`,
    code: `# Experiment 7: Map Two Lists into a Dictionary

keys = ["name", "age", "city"]
values = ["Rahul", 20, "Pune"]

dictionary = dict(zip(keys, values))
print(dictionary)
`
  },
  {
    id: 8,
    slug: "exp-8",
    number: "Experiment 08",
    shortNumber: "08",
    category: "Dictionaries",
    categoryKey: "dict",
    title: "Count Word Frequency Using a Dictionary",
    aim: "To write a Python program to count the frequency of words appearing in a string using a dictionary.",
    objective: "To update dictionary values and calculate the frequency of each word.",
    theory: "Frequency means the number of times an item appears. In this experiment, a sentence is split into individual words with split(), and a dictionary records how often each word occurs. For each word, the program checks if the word already exists in the dictionary. If it does, its count is incremented by 1. Otherwise, a new key is added with value 1.",
    algorithm: "1. Start.\n2. Store the sentence in a variable.\n3. Split the sentence into words using sentence.split().\n4. Create an empty frequency dictionary frequency = {}.\n5. For every word, if it exists in frequency, increment frequency[word] += 1; otherwise, set frequency[word] = 1.\n6. Display the frequency dictionary.\n7. Stop.",
    applications: "Frequency counting is widely used in text analytics, survey response analysis, server log monitoring, keyword density analysis, and word cloud generation.",
    vivaQuestions: [
      "1. What is word frequency?",
      "2. Why is a dictionary suitable for this task?",
      "3. How is a new word added to the dictionary?",
      "4. What is the difference between word frequency and character frequency?",
      "5. How could the program ignore capitalization?"
    ],
    fileName: "word_frequency.py",
    sampleOutput: `{'apple': 3, 'mango': 2, 'banana': 1}`,
    code: `# Experiment 8: Count Word Frequency Using a Dictionary

sentence = "apple mango apple banana mango apple"
words = sentence.split()
frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

print(frequency)
`
  },
  {
    id: 9,
    slug: "exp-9",
    number: "Experiment 09",
    shortNumber: "09",
    category: "File Handling",
    categoryKey: "files",
    title: "Read a File and Capitalize the First Letter of Every Word",
    aim: "To write a Python program that reads a file, capitalizes the first letter of every word, and saves the updated text.",
    objective: "To practise file reading, file writing, context managers, and the title() string method.",
    theory: "File handling allows a program to read from and write to disk files. Python's open() function opens a file in a specified mode: 'r' for reading and 'w' for writing. The read() method retrieves file contents as a string. The title() method returns a new string where the first character of each word is capitalized. The with statement acts as a context manager that automatically closes files when execution leaves the block, preventing resource leaks.",
    algorithm: "1. Create input.txt in the same folder as the program.\n2. Start the program.\n3. Open input.txt in read mode ('r') using with open(...) and read content.\n4. Apply title() to the text to capitalize each word.\n5. Open input.txt in write mode ('w') and save the updated text.\n6. Display 'File updated successfully!'.\n7. Stop.",
    applications: "File processing is used in text editors, report generators, batch log cleaners, document transformation pipelines, and data normalization scripts.",
    vivaQuestions: [
      "1. What is file handling?",
      "2. What is the difference between 'r' and 'w' modes?",
      "3. What does read() do?",
      "4. What does title() do?",
      "5. Why is the with statement useful?",
      "6. Why should we be careful when opening a file in write mode?"
    ],
    fileName: "capitalize_file.py",
    sampleOutput: `Before execution, input.txt contains:
python programming is easy
welcome to computer science

After execution, input.txt contains:
Python Programming Is Easy
Welcome To Computer Science

Program output:
File updated successfully!`,
    code: `# Experiment 9: Read a File and Capitalize the First Letter of Every Word

with open("input.txt", "r") as file:
    text = file.read()

text = text.title()

with open("input.txt", "w") as file:
    file.write(text)

print("File updated successfully!")
`
  }
];
