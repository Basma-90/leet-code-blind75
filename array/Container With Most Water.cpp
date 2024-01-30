class Solution {
public:
    int maxArea(vector<int>& height) {
        int mx=-1;
        int left=0;
        int right=(height.size())-1;
        int area;
        
            while(left<right){
                int tmp=min(height[left],height[right]);
                int xAxis=right-left;
                int area=xAxis*tmp;
                mx=max(mx,area);
                if(height[left]<height[right]){
                    left++;
                }else{
                    right--;
                }
            }
           
        return mx;
    }
};