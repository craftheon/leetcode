package main

import (
	"reflect"
)

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		if j, ok := m[target-num]; ok {
			return []int{j, i}
		}
		m[num] = i
	}
	return nil
}

func main() {
	reflect.DeepEqual(twoSum([]int{2, 7, 11, 15}, 9), []int{0, 1})
	reflect.DeepEqual(twoSum([]int{3, 2, 4}, 6), []int{1, 2})
	reflect.DeepEqual(twoSum([]int{1, 7, 7}, 8), []int{0, 1})
}
