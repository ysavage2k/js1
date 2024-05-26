"use strict";

// Функция solveEquation
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  } else if (d === 0) {
    arr.push(-b/(2*a));
  }
  return arr;
}

// Тесты
describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });

    it('должна возвращать 1 корень уравнения', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });
});
