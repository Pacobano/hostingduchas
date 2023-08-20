const locations = [
  {
    name: "Cubeto bombas aceite",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
      // Agregar más elementos de la lista de chequeo según sea necesario
    ]
  },
  {
    name: "Cubeto bombas metanol",
        checklist: [
          "Operatividad de Duchas",
          "Operatividad de Lavaojos",
          "Operatividad de Botellas de Diphoterine",
          "Acceso Despejado",
          "Pictograma Visible",
          "Iluminación",
          // Agregar más elementos de la lista de chequeo para esta ubicación
        ]
  },
  {
    name: "Cubeto bombas metilato",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
      // Agregar más elementos de la lista de chequeo para esta ubicación
    ]
  },
  {
    name: "Cubeto bombas biodiesel",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
      // Agregar más elementos de la lista de chequeo para esta ubicación
    ]
  },
  {
    name: "Cubeto bombas sosa",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "Cubeto bombas ácidos",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "Planta baja refinería (600 P1C)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "1ª planta refinería (500 R1)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  },
  {
    name: "2ª planta refinería (polipasto Trysil)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "Planta baja BIO (166 P8)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "Planta baja BIO (163 S1)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "1ª planta BIO (163 C1)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  },
  {
    name: "1ª planta BIO (163 S2 A/B)",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "Iluminación",
    ]
  },
  {
    name: "Laboratorio",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  },
  {
    name: "EDARI",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  },
  {
    name: "Cubeto químicos APQ",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  },
  {
    name: "Arcón emergencia químicos",
    checklist: [
      "Operatividad de Duchas",
      "Operatividad de Lavaojos",
      "Operatividad de Botellas de Diphoterine",
      "Acceso Despejado",
      "Pictograma Visible",
      "IIluminación",
    ]
  }
  // Agrega más ubicaciones y elementos de la lista de chequeo aquí
];
const photo = document.querySelector('#photo');
const cameraButton = document.querySelector('#cameraButton');

cameraButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    photo.style.display = 'block';
    photo.srcObject = stream;
  } catch (error) {
    console.error('Error al acceder a la cámara:', error);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const checklistContainer = document.getElementById("checklist-container");
  const form = document.getElementById("checklist-form");

  // Generar campos de checkbox para cada ubicación y elemento de la lista de chequeo
  locations.forEach((location, index) => {
    const locationDiv = document.createElement("div");
    locationDiv.innerHTML = `<h4>${location.name}</h4>`;
    location.checklist.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "checklist-item";
      itemDiv.innerHTML = `<label><input type="checkbox" name="location-${
        index + 1
      }-${item}" value="checked"><span class="checkmark"></span>${item}</label>`;
      locationDiv.appendChild(itemDiv);
    });
    checklistContainer.appendChild(locationDiv);
  });
});
function sendSummaryEmail() {
  const operator = document.getElementById("operatorSelect").value;
  const dateTime = new Date().toLocaleString();
  const actions = document.getElementById("actionsTextarea").value;

  // Construir el contenido del correo electrónico con la información ingresada
  let emailContent = `Resumen de Revisión de Duchas de Emergencia\n\n`;
  emailContent += `Nombre del operador: ${operator}\n`;
  emailContent += `Fecha y hora de la inspección: ${dateTime}\n\n`;

  // Recorrer las ubicaciones y obtener el estado de cada campo de la lista de chequeo
  locations.forEach((location, index) => {
    const itemsNotOk = [];
    location.checklist.forEach((item) => {
      const checkboxInput = document.querySelector(
        `input[name="location-${index + 1}-${item}"]`
      );
      if (!checkboxInput.checked) {
        itemsNotOk.push(item);
      }
    });

    if (itemsNotOk.length > 0) {
      emailContent += `${location.name}:\n`;
      itemsNotOk.forEach((item) => {
        emailContent += `${item}: NO OK\n`;
      });
      emailContent += `\n`;
    }
  });

  // Agregar las acciones correctivas propuestas
  emailContent += `Acciones correctivas propuestas:\n${actions}\n`;

  // Abrir el cliente de correo predeterminado con los campos prellenados
  const recipientEmails = [
    "francisco.bano@masolgruppo.com",
    "pedro.montero@masolgruppo.com"
  ];
  const emailSubject = `Revisión Duchas de Seguridad - ${dateTime} - Realizada por ${operator}`;
  const mailtoLink = `mailto:${recipientEmails.join(",")}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailContent)}`;
  window.location.href = mailtoLink;
}
