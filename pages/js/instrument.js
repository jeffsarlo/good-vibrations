let guitarData = []

class Instruments {
  async getInstruments() {
    try {
      let result = await fetch("../../json/guitars.json")
      let data = await result.json()
      return data
      console.log(data)
    }  catch (error) {
      console.log(error)
    }
  }
}

class InstrumentsUI {
  displayInstruments(instruments) {
    instruments.forEach(item => {
      guitarData +=
      `<div class="gallery-card" data-brand="${item.brand}" data-category="${item.category}" data-condition="${item.condition}" data-justin="${item.justIn}">
        <img class="more-info img-fluid" src="../${item.img1}" alt="${item.alt}" data-id="${item.id}">
        <h6 class="titles">${item.title}</h6>
        <p class="text-center">
          <strong>$ <span class="prices">${item.price}</span></strong>
        </p>
       </div>`

      $('#img-gallery').html(guitarData)
    })
  }
  showDropdownValue() {
    $('#show-current').text($(".dropdown1 button[id='24']").text())
    $('#sort-current').text($(".dropdown2 button[id='default']").text())
    $('.dropdown1 button').click((e) => {
        $('#show-current').text($(e.target).text())
    })
    $('.dropdown2 button').click(e => {
        $('#sort-current').text($(e.target).text())
    })
  }
  collapseCheckBox(checkbox, id) {
    let sibs = $(checkbox).parent().siblings()
    if ($(checkbox).prop("checked") === true) {
      sibs.hide()
    } else {
      sibs.show()
    }
  }
  rotateArrows() {
    $(".btn-link").click(() => {
      var arrow = $(".arrow")
      $(arrow).toggleClass("rotate");
    })
  }
  titleCharLimiter() {
    $(".gallery-card h6").each((i,e) => {
      let len=$(e).text().trim().length
      if(len>18) {
        $(e).text($(e).text().substr(0,18)+'...')
      }
    })
  }
}

class Filter {
  filters(key, id) {
    $(".gallery-card").each((index, card) => {
      const brand = card.getAttribute('data-brand')
      const category = card.getAttribute('data-category')
      const condition = card.getAttribute('data-condition')

      if (key === 'brand' && id !== brand) {
        $(card).toggleClass("show-hide-brand")
      }
      if (key === 'category' && id !== category) {
        $(card).toggleClass("show-hide-category")
      }
      if (key === 'condition' && id !== condition) {
        $(card).toggleClass("show-hide-condition")
      }
    })
  }
  sorters(id) {
    let container = $("#img-gallery")[0]
    let titles = $(".titles").toArray()
    let prices = $(".prices").toArray()
    let newArrivals = $(".gallery-card").toArray()

    if (id === 'a-z') {
      titles.sort((a,b) => {
        return a.innerHTML.toLowerCase().localeCompare(b.innerHTML.toLowerCase())
      })
      sortTitle(titles)
    }
    if (id === 'z-a') {
      titles.sort((a,b) => {
        return b.innerHTML.toLowerCase().localeCompare(a.innerHTML.toLowerCase())
      })
      sortTitle(titles)
    }
    if (id === 'low-high') {
      prices.sort((a,b) => {
        return Number(a.innerText) - Number(b.innerText)
      })
      sortPrice(prices)
    }
    if (id === 'high-low') {
      prices.sort((a,b) => {
        return Number(b.innerText) - Number(a.innerText)
      })
      sortPrice(prices)
    }
    if (id === 'new') {
      newArrivals.map((item, index) => {
        if ($(item).data("justin") !== true) {
          $(item).addClass("show-hide-justin")
        }
      })
    }
    if (id === 'default') {
      newArrivals.map((item, index) => {
        if ($(item).data("justin") !== true) {
          $(item).removeClass("show-hide-justin")
        }
      })
    }

    function sortTitle(titles) {
      titles.map(title => {
        let element = $(title).parent()[0]
        $(container).append(element)
      })
    }

    function sortPrice(prices) {
      prices.map(price => {
        let element = $(price).parent().parent().parent()[0]
        $(container).append(element)
      })
    }

  }
  filterListeners() {
    $("#show, #sort-by").click(e => {
      const option = e.target
      const key = e.target.getAttribute('data-name')
      const id = e.target.id
      console.log(e)
      this.sorters(id)
    })

    $("#collapseOne, #collapseTwo, #collapseThree").change("click", e => {
      const checkbox = e.target
      const key = e.target.getAttribute('data-name')
      const id = e.target.id

      this.filters(key,id)
      instrumentsUI.collapseCheckBox(checkbox, id)
    })
  }
}

class Controls {

  moreInformation() {
    $(".gallery-card").on("click", e => {
      const id = $(e.target).attr('data-id')
      $.getJSON("../../json/guitars.json", json => {
        for(let i in json) {
          if (id === json[i].id ) {
            window.location.href = "./product.html?product=" + id
          }
        }
      })
    })
  }
}

class InStorage {
  static saveAllInstruments(instruments) {
    localStorage.setItem("all-instruments", JSON.stringify(instruments))
  }
  static getAllInstruments() {
    return localStorage.getItem("all-instruments") ? JSON.parse(localStorage.getItem("all-instruments")) : []
  }
}

const instruments = new Instruments()
const instrumentsUI = new InstrumentsUI()
const filter = new Filter()
const controls = new Controls()

$(document).ready(() => {
  instruments.getInstruments().then(instrument => {
    InStorage.saveAllInstruments(instrument)
    instrumentsUI.displayInstruments(instrument)

  }).then(() => {
    instrumentsUI.showDropdownValue()
    instrumentsUI.rotateArrows()
    instrumentsUI.titleCharLimiter()
    filter.filterListeners()
    controls.moreInformation()
  })
})
