let a = 5;      //Nombre d'itérarions

function Fibonacci (ite)
{
    let n = 0;
    let nplusun = 1;
    let somme;
    let i = 0;          // Initialisation des itérations
    for (n = 0; i = ite; i++)
    {
        somme = n + nplusun;
        console.log(somme);
        n = nplusun;
        nplusun = somme;
    }
}

Fibonacci(a);