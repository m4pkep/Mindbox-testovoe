реализовано тестовое задание, визуалом не занимался, реализовал 

хуки setTask, setInputValue и setFilter

функционал:
Добавление задачи: ввести текст задачи в поле ввода и нажать кнопку "Добавить задачу".
Списки задач: невыполненные задачи отображаются в одном списке, а выполненные в другом.
Переключение состояния задачи: нажать на текст задачи, чтобы отметить её как выполненную/невыполненную.
Удаление задачи: нажать кнопку "Удалить" рядом с задачей, чтобы удалить её из списка.

тесты с использованием библиотеки @testing-library/react:
Тест на добавление задачи:
Проверяет, что задача добавляется в список после ввода текста и нажатия кнопки "Добавить задачу".
Тест на удаление задачи:
Проверяет, что задача удаляется из списка после нажатия кнопки "Удалить".
