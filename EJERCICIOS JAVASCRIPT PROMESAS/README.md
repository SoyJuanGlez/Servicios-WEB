# Descripciones

## 1. DesacargaArchivo.js

**Descripción:**  
Simula la descarga de un archivo. Si el tamaño es menor o igual a 50MB, 
la promesa se resuelve con un mensaje de éxito; si es mayor, se rechaza con un mensaje de error.

**Resolución:**  
Se utiliza una promesa que evalúa el tamaño recibido y resuelve o rechaza según la condición.

---

## 2. ValidacionEdad.js

**Descripción:**  
Valida si una persona es mayor de edad.

**Resolución:**  
La función recibe la edad y resuelve la promesa si es mayor o igual a 18 años; si no, la rechaza con un mensaje de error.

---

## 3. VerificacionStockTienda.js

**Descripción:**  
Verifica si hay suficiente stock de un producto en el inventario para una compra.

**Resolución:**  
La función recibe el nombre del producto y la cantidad solicitada. 
Si el producto existe y hay suficiente cantidad, la promesa se resuelve; en caso contrario, se rechaza.

---

## 4. SimulacionPagoLinea.js

**Descripción:**  
Simula el proceso de pago en línea, resolviendo o rechazando la promesa según la validez de los datos de pago.

**Resolución:**  
Se utiliza una promesa que valida los datos y responde con éxito o error según corresponda.

---

## 5. AutenticacionUsuario.js

**Descripción:**  
Autentica a un usuario comprobando su nombre y contraseña.

**Resolución:**  
La promesa se resuelve con un objeto de usuario si las credenciales son correctas; 
si no, se rechaza con un objeto de error y código 401.

---

## 6. VerificacionSaldoBancario.js

**Descripción:**  
Verifica si una cuenta bancaria tiene saldo suficiente para realizar una transacción.

**Resolución:**  
La función recibe el número de cuenta y el monto. Si hay fondos suficientes, la promesa se resuelve con el saldo restante; 
si no, se rechaza con un mensaje de fondos insuficientes y el saldo disponible.

---

## 7. ConsultaClimaServicio.js

**Descripción:**  
Consulta el clima de una ciudad en una base de datos local.

**Resolución:**  
Si la ciudad existe, la promesa se resuelve con los datos de clima; si no, se rechaza con un error y código 404