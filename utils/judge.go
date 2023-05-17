package utils

import "fmt"

func eqArray(source []int, target []int) bool {
	if len(source) != len(target) {
		return false
	}
	for i, v := range source {
		if target[i] != v {
			return false
		}
	}
	return true
}

func JudgeWithArray(problem string, source []int, target []int) {
	if eqArray(source, target) {
		fmt.Printf("[%s] Accept! \n", problem)
		return
	}
	fmt.Printf("[%s] Wrong!, Answer: %v / Expected: %q \n", problem, source, target)
}

func JudgeWithValue() {}

func JudgeWithLinkList() {}
