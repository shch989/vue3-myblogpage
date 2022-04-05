function setCurTime() {
    let resId = 0;
    // 현재시각 보이기
    resId = setInterval(displayNow, 1000);

    function displayNow() {
        // 현재 시간 불러오는 클래스
        let now = new Date();
        // 현재 대한민국에서 쓰는 시간을 저장
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

    return resId;
}

function checkAll() {
    // 테이블 완료 체크시 전체 완료 수정
    let chkAll = document.querySelector('#chkAll');
    let tableComplain = document.querySelector('#tableComplain');
    
    console.log(chkAll.checked)
    // 체크박스위 상태가 체크일 때
    if(chkAll.checked == true) {
        for(let i=1;i<tableComplain.rows.length;i++) {
            tableComplain.rows[i].cells[5].innerHTML = "완료";
        }
    }
}

// 평션 2개 내보내기
export { setCurTime, checkAll }