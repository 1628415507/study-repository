/*
 * @Author: Hongzf
 * @Date: 2022-09-19 15:07:47
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-09-19 15:21:26
 * @Description: 
 */
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
// 哈希表，时间复杂度O(m + n) m为nums1长度，n为nums2长度
// 这道题两种思路，空间换时间，或者不用额外空间就提升时间复杂度。

// 空间换时间的思路是用个Hash表来存数组1的元素以及出现的个数
// （此处需要遍历n次，并存一个n级别的空间）。
// 遍历数组2，发现数组2里有Hash表里的值就存到Result数组里，
// 并把Hash表内该值次数减一（为0之后就Delete）。
// 如果不存在Hash表里，就跳过。这样时间复杂度就是(m+n)

// 不用额外空间，就用遍历n的时候，判断值在不在m里，
// 如果在，把m里的该值push到Result数组里，
// 并将该值从m数组里删掉（用splice）。
// 这样就是不用额外空间，但是提高了时间复杂度。
// 思路1：哈希表思路
const getIntersectionByHash = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
// 调用
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
getIntersectionByHash(nums1, nums2)
console.log('【 getIntersectionByHash(nums1, nums2) 】-46', getIntersectionByHash(nums1, nums2))
// 返回 [2, 2]。
