import { useEffect, useState } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {// 组件卸载时移除事件
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height };
};

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      // 检查 storedValue 是否为 null、undefined 或空字符串
      if (!storedValue || storedValue === 'undefined') {
        return initialValue;
      }
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // 如果 value 是 undefined，则移除该 key
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

function getInfo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now().toString());
    }, 1500);
  });
}

type InfoState = {
  loading: boolean;
  info: string;
  error?: Error;
}

export const useGetInfo = () => {
  const [state, setState] = useState<InfoState>({
    loading: true,
    info: '',
  });

  useEffect(() => {
    let isMounted = true;

    getInfo().then((info) => {
      if (isMounted) {
        setState({
          loading: false,
          info,
        });
      }
    }).catch((error) => {
      if (isMounted) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error,
        }));
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};