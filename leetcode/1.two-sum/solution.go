package main

import "fmt"

func twoSum(nums []int, target int) []int {
	cache := map[int]int{}
	for index, num := range nums {
		if value, ok := cache[target - num]; ok {
			return []int{value, index}
		}
		cache[num] = index
	}
	return []int{}
}


func main() {
	res := twoSum([]int{3, 2, 1, 4}, 9)
	fmt.Println(res)
}