// src/data/projectsData.ts

import { IProject } from '../types/projects';

export const projects: IProject[] = [
  {
    id: 1,
    title: 'React E-Commerce Case',
    description: `
      A simple e-commerce app built with React and TypeScript. Users can browse products, filter by category,
      and add items to their cart. The app uses the context API for cart management and stores data in
      localStorage to persist the cart even after page reloads.
    `,
    technologies: ['Context Api', 'Shadcn Ui', 'Local Storage', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS v4.0'],
    githubUrl: 'https://github.com/ilknrgzll/react-ecommerce-case',
    liveDemoUrl: 'https://ilknurgüzel.github.io/react-ecommerce-case',
    // imageUrl: ecommerceCase
  },
  {
    id: 2,
    title: 'My Website',
    description: `
      We are currently in a live inception. I don't even need to explain this project 😄. But let's give a quick summary anyway.
      This project was developed with modern web technologies and serves as both a display and a testbed.
      Built with React and TypeScript, styled with Tailwind CSS, and enhanced with smooth animations via Framer Motion.
      It also utilizes React Icons for iconography and React Scroll for smooth in-page navigation.
      Powered by Vite, the development experience is fast, and the performance is top-notch.
    `,
    technologies: ['React', 'TypeScript', 'React Scroll', 'Tailwind CSS', 'Framer Motion', 'React Icons', 'Vite'],
    githubUrl: 'https://github.com/ilknrgzll/ilknurgüzel.github.io',
    liveDemoUrl: 'https://ilknurgüzel.github.io/',
    // imageUrl: mySite
  },
  {
    id: 3,
    title: 'React TS Base Project',
    description: `
      This project is a starter template for building scalable and maintainable applications using React and TypeScript.
      It includes a variety of built-in features like responsive design, a notification system, lazy loading, custom loaders,
      a light/dark theme toggle, and error pages, making it an ideal foundation for complex projects.
    `,
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'React Router'],
    githubUrl: 'https://github.com/ilknrgzll/OrderManagement',
    liveDemoUrl: 'https://ilknurgüzel.github.io/OrderManagement',
    // imageUrl: baseProject
  },
  {
    id: 4,
    title: 'Inventory Counting System',
    description: `
      This application was developed for a former employer as a comprehensive inventory management solution.
      Designed to facilitate accurate stock counts within warehouses, stores, or any organizational structure,
      it allows users to create and manage individual stock counts, quickly adding items via barcode scanning.
      Each stock count operates independently, enabling precise tracking, and can be exported to Excel for reporting purposes.
      The application is fully responsive and features modern, intuitive components. Global state management is handled with Redux,
      and RTK Query is employed for efficient RESTful API interactions. The app also supports both light and dark themes,
      and careful attention was given to clean code practices and organized file management.
      React Router is used for seamless route handling throughout the application.
    `,
    technologies: [
      'Dynamsoft Barcode Reader',
      'RTK Query',
      'Tailwind CSS',
      'Framer Motion',
      'Redux',
      'React Router',
      'Xlsx',
      'Skeleton Loading',
      'React',
      'TypeScript'
    ],
    githubUrl: 'https://github.com/ilknrgzll/PurchasingManager'
  },
  {
    id: 5,
    title: 'Space Ship Titanic AI Model',
    description: `
      This project was a great opportunity for me to deepen my knowledge in machine learning and explore new techniques.
      I applied these techniques to the Kaggle Titanic dataset with the goal of predicting passenger survival using two different models:
      a Neural Network and a Support Vector Classifier (SVC).

      Throughout the process, I focused on data preprocessing, which included handling missing values, feature engineering, and scaling.
      Once the dataset was prepared, I trained and evaluated both models to compare their effectiveness. The Neural Network model
      challenged me to learn more about deep learning concepts, while the SVC model gave me a chance to refine my understanding
      of classical machine learning methods.

      Overall, this project allowed me to not only build functional models but also to expand my knowledge in AI and apply new
      techniques that I hadn't worked with before. It was a rewarding learning experience that highlighted the balance between
      complexity and simplicity in machine learning models.
    `,
    technologies: ['Python', 'Neural Networks', 'SVC', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/ilknrgzll/ComplaintManager'
  },
  {
    id: 6,
    title: 'Titanic Logistic Regression Model',
    description: `
    This project was an excellent opportunity to dive deeper into machine learning using the well-known Titanic dataset from Kaggle.
    I applied a Logistic Regression model to predict the survival chances of passengers based on their features, such as age, gender,
    and class. The project allowed me to focus on key aspects of data preprocessing, including handling missing values and feature
    engineering, which were crucial steps in building an effective model.

    Using powerful Python libraries like pandas, NumPy, and Scikit-learn, I was able to efficiently manage data analysis and model training.
    This project helped me take my theoretical knowledge of machine learning and apply it in a practical scenario. It also gave me
    valuable insights into model evaluation techniques. Overall, this project was a rewarding learning experience, and it has laid the
    groundwork for more advanced projects in the future.
  `,
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Logistic Regression', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/ilknrgzll/SkinCancer'
  },
  {
    id: 7,
    title: 'Template Based Note App',
    description: `
    This Flutter project is designed to be more than just a standard note-taking app. It allows users to create or choose
    from templates, making the note-taking process flexible and efficient. You can easily add videos, photos, voice recordings,
    or simple text fields to your notes, depending on your needs.
    One highlight of the app is the ability to select a template, which automatically fills the note area with predefined components,
    helping users save time. The My Notes section allows users to view and manage their saved notes.
    I implemented the Bloc/Cubit architecture to ensure a clean and scalable code structure, making the app modular and easy to maintain.
  `,
    technologies: [
      'Flutter',
      'Dart',
      'Bloc',
      'Cubit',
      'Provider',
      'Permission Handler',
      'ML Kit Text Recognition',
      'Equatable',
      'Image Picker',
      'Image Cropper',
      'Dynamic Color',
      'Lottie Animations'
    ],
    githubUrl: 'https://github.com/ilknrgzll/Ndp'
  },
  {
    id: 8,
    title: 'Big Data Multithreading App',
    description: `
    This project was part of a school assignment where I built a desktop application using Python to work with large datasets
    through multithreading. The app allows users to interact with the dataset by analyzing similarities between columns based on
    a user-defined threshold. Users can input a similarity threshold and see the results listed based on the comparison of data columns.

    Additionally, the application provides insights into the performance of each thread, displaying the number of threads used
    and the execution time for each thread. This not only demonstrates efficient handling of large data but also showcases the
    power of multithreading for performance optimization.
  `,
    technologies: ['Python', 'Multithreading', 'Data Analysis', 'Desktop Application'],
    githubUrl: 'https://github.com/ilknrgzll/MvcProjeKampi'
  }
];
