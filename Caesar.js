let chaine = "mh vxlv wkrpdv";

function decoder(chaine)
{
    let key = 0;
    
    for (key = 0; key = 26; key++)
    {
        let res ='';
        for (let i = 0; i < chaine.length; i++)
        {
            //Passe par chaque lettre
            let char = chaine[i];

            if (char.match(/[a-z]/i))
            {
                let code = chaine.charCodeAt(i);

                if ((code >= 65) && (code <= 90))
                {
                    char = String.fromCharCode(((code - 65 + key)) % 26) + 65);
                } else if ((code >= 97) && (code <= 122))
                {
                    char = String.fromCharCode(((code - 97 + key) % 26) + 97);
                }

                res += char;
        }
        console.log(res);
    }
}

decoder(chaine);