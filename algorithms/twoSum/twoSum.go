package main

import "github.com/yuangwei/leetcode/utils"

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
	utils.JudgeWithArray("twoSum", twoSum([]int{2, 7, 11, 15}, 9), []int{0, 1})
	utils.JudgeWithArray("twoSum", twoSum([]int{3, 2, 4}, 6), []int{1, 2})
	utils.JudgeWithArray("twoSum", twoSum([]int{1, 7, 7}, 8), []int{0, 1})
}
