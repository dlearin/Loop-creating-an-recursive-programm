<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">

        let numero=Math.random();

        let numero1;

        do {

            numero1=prompt("Escoge tu numero");

            if (numero1>numero) {

                alert("Error! Numero mayor que el aleatorio");
            }

            if (numero1<numero) {
                alert("error! Numero mayor que el aletorio");
            }


        } while (numero1!=numero);


        alert("Has acertado, solo te ha tomado")

    // al estar bien saltaria aqui que es donde metes la alerta de que has acertado

    </script>
</body>
</html>
