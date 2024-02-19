function calculate() {
    var weight = parseFloat(document.getElementById("weight").value);
    var pillWeight = parseFloat(document.getElementById("pillWeight").value);
    var activeIngredient = parseFloat(document.getElementById("activeIngredient").value);
    var dosage = parseFloat(document.getElementById("dosage").value);
    var packets = parseFloat(document.getElementById("packets").value);
  
    // 입력값이 유효한지 확인
    if (isNaN(weight) || isNaN(pillWeight) || isNaN(activeIngredient) || isNaN(dosage) || isNaN(packets)) {
      document.getElementById("result").textContent = "입력값이 잘못되었습니다. 유효한 숫자를 입력해주세요.";
      return;
    }
  
    // 한 봉지에 약이 몇 그램 들어가는지 계산
    var gramsPerPacket = (weight * dosage * pillWeight) / activeIngredient;
  
    // 원하는 만큼 봉지를 만들 때 필요한 알약의 숫자 계산
    var pillsNeeded = (packets / (pillWeight / gramsPerPacket ));
  
    // 약을 만드는데 필요한 알약의 총 무게 계산
    var totalPillWeightNeeded = pillsNeeded * pillWeight;
  
    document.getElementById("result").innerHTML = `
    <p>한 봉투에 들어가는 약의 무게: ${gramsPerPacket.toFixed(4)} g</p>
    <p>${packets} 봉투를 만들기 위해 필요한 알약의 수: ${pillsNeeded.toFixed(4)} 개</p>
    <p>필요한 총 알약의 무게: ${totalPillWeightNeeded.toFixed(4)} g</p>
  `;
}