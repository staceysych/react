class App {
    run = (name = 'Stacey') => {
        console.log(`Hello, ${name}`);
        console.log([1,2[3,4]].flat());
    }
}

const app = new App();
app.run();