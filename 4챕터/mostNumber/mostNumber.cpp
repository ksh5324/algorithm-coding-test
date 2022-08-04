// N**2 알고리즘
int majority1(const vector<int>& A){
    int N = A.size();
    int majority = -1, majorityCount = 0;
    for(int i = 0; i < N; ++i){
        // A에 등장하는 A[i]의 수를 센다
        int V = A[i], count = 0;
        for(int j = 0; j < N; ++j){
            if(A[j] == V){
                ++count;
            }
        }

        // 현재 최대 빈도보다 많다면 갱신
        if(count > majorityCount){
            majorityCount = count;
            majority = V;
        }
    }
    return majority;
}

// N+range 알고리즘
int majority2(const vector<int>& A){
    int N = A.size();
    vector<int> count(101, 0);
    for(int i=0; i<N; ++i){
        count[A[i]]++;
    }
    int majority = 0;
    for(int i=1; i<=100; ++i){
        if(count[i] > count[majority]){
            majority = i;
        }
    }
    return majority
}