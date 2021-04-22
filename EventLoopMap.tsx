
export interface useCallStackInterface {
  arr: Array<unknown>;
  _cb: (error: string,
 item: unknown,
 index?: number,
 isFristItem?: boolean,
 isLastItem?: boolean,
 arr?: Array<unknown>) => void;
}

export interface useEventLoopInterface extends useCallStackInterface {
  minimalTime: number;
}

export function useEventLoopLowPriority<useEventLoopInterface>(arr, _cb, minimalTime = 
0): void  {
  if (!Array.isArray(arr)) {
    throw new Error("The first param most be an array")
  }

  if (typeof _cb !== "function") {
    throw new Error("The second param most be a function")
  }

  let index = 0;
  let length = arr.length
  do {
    let error = null;
    const item = arr[index];
    const first = index===0
    const last = index===arr.length-1

    setTimeout(() => {
      _cb([error, item, index, first, last, arr]);
    }, minimalTime);

    index ++;

  } while (--length)
};

export function useEventLoopHighPriority<useCallStackInterface>(arr, _cb): void  {
  if (!Array.isArray(arr)) {
    throw new Error("The first param most be an array")
  }

  if (typeof _cb !== "function") {
    throw new Error("The second param most be a function")
  }

  let index = 0;
  let length = arr.length
  do {
    let error = null;
    const item = arr[index];
    const first = index===0;
    const last = index===arr.length-1;

    Promise.resolve(1).then(function(resolve) {
      _cb([error, item, index, first, last, arr]);
    })

    index ++;

  } while (--length)
};

export function useCallStack<useCallStackInterface>(arr: Array<unknown>, _cb){
  if (!Array.isArray(arr)) {
    throw new Error("The first param most be an array")
  }

  if (typeof _cb !== "function") {
    throw new Error("The second param most be a function")
  }

    let index = 0;
    let length = arr.length
    do {
      let error = null;
      const item = arr[index];
      const first = index===0
      const last = index===arr.length-1
 
      _cb([error, item, index, first, last, arr]);

      index ++;

    } while (--length)
};
