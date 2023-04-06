import { configureStore } from "@reduxjs/toolkit";

function changeXucXac1(state = { url_1: "./img/1.png" }, action) {
  switch (action.type) {
    case "numberXuc1": {
      if (action.payload === 1) {
        return { ...state, url_1: "./img/1.png" };
      } else if (action.payload === 2) {
        return { ...state, url_1: "./img/2.png" };
      } else if (action.payload === 3) {
        return { ...state, url_1: "./img/3.png" };
      } else if (action.payload === 4) {
        return { ...state, url_1: "./img/4.png" };
      } else if (action.payload === 5) {
        return { ...state, url_1: "./img/5.png" };
      } else if (action.payload === 6) {
        return { ...state, url_1: "./img/6.png" };
      }
    }

    // case "Xuc2":
    //   return { ...state, url_1: "./img/2.png" };
    // case "Xuc3":
    //   return { ...state, url_1: "./img/3.png" };
    // case "Xuc4":
    //   return { ...state, url_1: "./img/4.png" };
    // case "Xuc5":
    //   return { ...state, url_1: "./img/5.png" };
    // case "Xuc6":
    //   return { ...state, url_1: "./img/6.png" };
    default:
      return state;
  }
}
function changeXucXac2(state = { url_2: "./img/1.png" }, action) {
  switch (action.type) {
    case "numberXuc2": {
      if (action.payload === 1) {
        return { ...state, url_2: "./img/1.png" };
      } else if (action.payload === 2) {
        return { ...state, url_2: "./img/2.png" };
      } else if (action.payload === 3) {
        return { ...state, url_2: "./img/3.png" };
      } else if (action.payload === 4) {
        return { ...state, url_2: "./img/4.png" };
      } else if (action.payload === 5) {
        return { ...state, url_2: "./img/5.png" };
      } else if (action.payload === 6) {
        return { ...state, url_2: "./img/6.png" };
      }
    }

    //   switch (action.type) {
    //     case "Xuc2_1":
    //       return { ...state, url_2: "./img/1.png" };
    //     case "Xuc2_2":
    //       return { ...state, url_2: "./img/2.png" };
    //     case "Xuc2_3":
    //       return { ...state, url_2: "./img/3.png" };
    //     case "Xuc2_4":
    //       return { ...state, url_2: "./img/4.png" };
    //     case "Xuc2_5":
    //       return { ...state, url_2: "./img/5.png" };
    //     case "Xuc2_6":
    //       return { ...state, url_2: "./img/6.png" };
    //     default:
    //       return state;
    //   }
    default:
      return state;
  }
}
function countWin(state = { count: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
function changeXucXac3(state = { url_3: "./img/1.png" }, action) {
  switch (action.type) {
    case "numberXuc3": {
      if (action.payload === 1) {
        return { ...state, url_3: "./img/1.png" };
      } else if (action.payload === 2) {
        return { ...state, url_3: "./img/2.png" };
      } else if (action.payload === 3) {
        return { ...state, url_3: "./img/3.png" };
      } else if (action.payload === 4) {
        return { ...state, url_3: "./img/4.png" };
      } else if (action.payload === 5) {
        return { ...state, url_3: "./img/5.png" };
      } else if (action.payload === 6) {
        return { ...state, url_3: "./img/6.png" };
      }
    }
    // case "Xuc3_1":
    //   return { ...state, url_3: "./img/1.png" };
    // case "Xuc3_2":
    //   return { ...state, url_3: "./img/2.png" };
    // case "Xuc3_3":
    //   return { ...state, url_3: "./img/3.png" };
    // case "Xuc3_4":
    //   return { ...state, url_3: "./img/4.png" };
    // case "Xuc3_5":
    //   return { ...state, url_3: "./img/5.png" };
    // case "Xuc3_6":
    //   return { ...state, url_3: "./img/6.png" };
    // default:
    //   return state;
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    changeXucXac1: changeXucXac1,
    changeXucXac2: changeXucXac2,
    changeXucXac3: changeXucXac3,
    countWin: countWin,
  },
});

// store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
store.subscribe(() => {
  // store.getState(): Hàm dùng để lấy ra state hiện tại của store
  console.log("Giá trị state của store:", store.getState());
});
export default store;
