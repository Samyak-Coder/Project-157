AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "marvel-defender",
        title: "Marvel's Defenders",
        url: "../assets/thumbnails/a.jpg",
      },
      {
        id: "Origin-of-marvel",
        title: "Origin of Marvel",
        url: "../assets/thumbnails/b.jpg",
      },

      {
        id: "shang-chi",
        title: "Shangchi",
        url: "../assets/thumbnails/c.jpg",
      },
      {
        id: "spiderman",
        title: "Spiderman",
        url: "../assets/thumbnails/d.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
     
      // Title Text Element
      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl)
    }
  },

  createBorder: function(position, id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "box" ,
      height: 28,
      width: 20
    })
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1
    })
    
    return entityEl
  },

  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      height: 28,
      width: 20
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },

  createTitleEl: function(position, item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title
    })
    
    const elPosition = position
    elPosition.y = -20
    
    entityEl.setAttribute("position", elPosition)
    entityEl.setAttribute("visible", true)
    
    return entityEl
  },
  
});
