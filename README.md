# Homework 4: Components lifecycle

**Цель:**
Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов, использующих методы жизненного цикла 

сайт: http://otus-hw4.s3-website.eu-central-1.amazonaws.com/

1. Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов(можно как основу взять дз из урока про JSX)
2. Описать constructor как минимум в одном компоненте, объявить в конструкторе стейт и привязать контекст методов
3. Описать componentDidMount как минимум в одном компоненте, получить в нем данные сервера(можно использовать заглушку или сторонние сервисы, например https://jsonplaceholder.typicode.com/). Описать подписку на событие
4. Описать shouldComponentUpdate как минимум в одном компоненте, произвести в нем оптимизацию производительности(если будет притянутый за уши случай - ничего страшного)
5. Описать componentDidUpdate как минимум в одном компоненте, описать в нем условие реализовать обновление стейта при этом условии
6. Описать componentWillUnmout в компоненте, где в рамках componentDidMount была подписка на событие, реализовать отписку от этого события
7. Описать все остальные методы с каким-либо функционалом
8. Написать компонент с отловом ошибок, обернуть в него любой компонент
**Критерии оценки:**
ДЗ считается принятым, если выполнены первые 6 пунктов, написаны тесты и storybook