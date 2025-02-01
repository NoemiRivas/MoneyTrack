//this is a example of a model info file
const modelInfo = {
  //model name
  modelName: "entry",
  //model fields
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo",
      placeholder: "Titulo de la entrada",
    },
    {
      name: "description",
      type: "text",
      label: "Descripcion",
      placeholder: "Descripcion de la entrada",
    },
    {
        name: "category",
        type: "text",
        label: "Categoria",
        placeholder: "Categoria de la entrada",
    },
    {
      name: "amount",
      type: "number",
      label: "Monto",
      placeholder: "Monto de la entrada",
    },
    {
      name: "date",
      type: "date",
      label: "Fecha",
      placeholder: "Fecha de la entrada",
    },
  ],
};

export default modelInfo