AFRAME.registerComponent('positioning', {

  multiple: true,

  schema: {
    face: { type: 'string', oneOf: ['left', 'right', 'top', 'bottom', 'front', 'back']},
    pos: {type: 'number' }
  },

  init() {
    this.bbox = new THREE.Box3()
  },

  tick() {
    const { bbox } = this
    const object = this.el.object3D
    const parent = object.parent
    const scene = this.el.sceneEl.object3D

    scene.add(object)
    bbox.setFromObject(object)
    parent.add(object)

    switch (this.data.face) {
      case "left":
      {
        const offset = object.position.x - bbox.min.x
        object.position.x = this.data.pos + offset
      }
      break

      case "right":
      {
        const offset = bbox.max.x - object.position.x
        object.position.x = this.data.pos - offset
      }
      break

      case "bottom":
      {
        const offset = object.position.y - bbox.min.y
        object.position.y = this.data.pos + offset
      }
      break

      case "top":
      {
        const offset = bbox.max.y - object.position.y
        object.position.y = this.data.pos - offset
      }
      break

      case "back":
      {
          const offset = object.position.z - bbox.min.z
          object.position.z = this.data.pos + offset
       }
      break

      case "front":
      {
        const offset = bbox.max.z - object.position.z
        object.position.z = this.data.pos - offset
      }
      break

    }
  }
})

AFRAME.registerComponent('left', {

  schema: { type: 'number' },

  init () {
    this.el.setAttribute('positioning__left', `face:left;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__left')
  }
})

AFRAME.registerComponent('right', {

  schema: { type: 'number' },

  init() {
    this.el.setAttribute('positioning__right', `face:right;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__right')
  }
})

AFRAME.registerComponent('top', {

  schema: { type: 'number' },

  init() {
    this.el.setAttribute('positioning__top', `face:top;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__top')
  }
})

AFRAME.registerComponent('bottom', {

  schema: { type: 'number' },

  init() {
    this.el.setAttribute('positioning__bottom', `face:bottom;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__bottom')
  }
})

AFRAME.registerComponent('front', {

  schema: { type: 'number' },

  init() {
    this.el.setAttribute('positioning__front', `face:front;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__front')
  }
})

AFRAME.registerComponent('back', {

  schema: { type: 'number' },

  init() {
    this.el.setAttribute('positioning__back', `face:back;pos:${this.data}`)
  },

  remove() {
    this.el.removeAttribute('positioning__back')
  }
})