// app/meals/[someName]/page.js
export default function MealsDynamicPage({params}){
    return (
        <main>
            <h1>Meals Dynamic Page</h1>
            <p>{params.someName}</p>
        </main>
    );
}