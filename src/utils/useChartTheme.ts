import { G2 } from 'bizcharts';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const defaultDarkTheme = G2.getTheme('dark');

G2.registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
  subColor: 'rgba(255, 255, 255, 0.55)', // 次要文字颜色
  padding: [20, 20, 20, 20], // 图表内边距
  colors10: [
    '#4477DD', // 主色
    '#27AE60', // 成功色
    '#F39C12', // 警告色
    '#E74C3C', // 危险色
    '#9B59B6', // 紫色
    '#3498DB', // 蓝色
    '#1ABC9C', // 青色
    '#F1C40F', // 黄色
    '#E67E22', // 橙色
    '#34495E', // 深灰色
  ],
  axis: {
    line: {
      style: {
        stroke: 'rgba(255, 255, 255, 0.15)', // 轴线颜色
        lineWidth: 1,
      },
    },
    label: {
      style: {
        fill: 'rgba(255, 255, 255, 0.65)', // 轴标签文字颜色
        fontSize: 12,
      },
    },
    grid: {
      line: {
        style: {
          stroke: 'rgba(255, 255, 255, 0.05)', // 网格线颜色
          lineWidth: 1,
          lineDash: [4, 4],
        },
      },
    },
  },
  legend: {
    label: {
      style: {
        fill: 'rgba(255, 255, 255, 0.65)', // 图例文字颜色
        fontSize: 12,
      },
    },
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        backgroundColor: 'rgba(36, 36, 43, 0.95)', // 提示框背景色
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.85)', // 提示框文字颜色
        padding: '8px 12px',
        borderRadius: '4px',
      },
    },
  },
});

function useBizTheme() {
  const theme = useSelector((state: any) => state.theme);
  const themeName = theme === 'dark' ? 'darkTheme' : 'light';
  const [themeObj, setThemeObj] = useState(G2.getTheme(themeName));

  useEffect(() => {
    const themeName = theme === 'dark' ? 'darkTheme' : 'light';
    const newTheme = G2.getTheme(themeName);
    setThemeObj(newTheme);
  }, [theme]);

  return themeObj;
}

export default useBizTheme;
