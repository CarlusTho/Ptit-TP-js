function dimanche()
{
    let res = [];
    for (i = 2014; i <= 2050; i++)
    {
        let day = new Date(`January 1, ${i} 01:00:00`);
        if (day.getDay() == 0)
        {
            console.log(i)
        }
    }
}

console.log(dimanche());