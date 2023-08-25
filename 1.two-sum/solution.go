package main

func twoSum(nums []int, target int) []int{
	hash := map[int]int{}
	for k, v := range nums {
		hash[v] = k
		if c, ok := hash[target - v]; ok {
      return []int{c, k}
    }
	}
	return []int{}
}


func main() {
	twoSum([]int{3, 2, 1, 4}, 9)
}