const int INF = 987654321;
bool canEverybodyEat(const vector<int>& menu);

int M;
int selectMenu(vector<int>& menu, int food){
    if(food == M){
        if(canEverybodyEat(menu)) return menu.size();
        return INF;
    }
    
}