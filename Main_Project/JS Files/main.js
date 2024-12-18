import {header ,sideBox} from './HTMLSummary.js'
import { appUserData } from '../Backend/appUserData.js';

let createDataTable = ()=>{
    let tableData = ''
    appUserData.forEach(data => {
        if (data.verification == 'Completed'){
            tableData += `<tr role="row">
            <td tabindex="0">${data.id}</td>
            <td>${data.date}</td>
            <td class="popupButton">${data.name}</td>
            <td>${data.company}</td>
            <td>${data.mobileNo}</td>
            <td><button class="verification completed">${data.verification}</button></td>
            <td>${data.email}</td>
            </tr>`;
            }
            else{
                tableData += `<tr role="row">
            <td tabindex="0">${data.id}</td>
            <td>${data.date}</td>
            <td class="popupButton">${data.name}</td>
            <td>${data.company}</td>
            <td>${data.mobileNo}</td>
            <td><button class="verification notCompleted">${data.verification}</button></td>
            <td>${data.email}</td>
            </tr>`;
            }
    });
    return tableData;
}
let dataCount = ()=>{
    let count = 0
    appUserData.forEach(()=>{
        count++
    })
    return count
}

let data = `<thead>
                <tr role="row">
                    <th tabindex="0" rowspan="1" colspan="1" >Sr.No</th>
                    <th tabindex="0" rowspan="1" colspan="1">REG.DT</th>
                    <th tabindex="0" rowspan="1" colspan="1">Full Name</th>
                    <th tabindex="0" rowspan="1" colspan="1">Company Name</th>
                    <th tabindex="0" rowspan="1" colspan="1">Mobile Number</th>
                    <th tabindex="0" rowspan="1" colspan="1">Business Verification(BV)</th>
                    <th tabindex="0" rowspan="1" colspan="1">Email</th>
                </tr>
            </thead>
            <tbody>
                ${createDataTable()}
            </tbody>`;
        
document.getElementById('header').innerHTML = header;
document.getElementById('sideBox').innerHTML = sideBox;
document.querySelector('.dataTable').innerHTML = data;
document.querySelector('.Usercount').innerHTML = dataCount();

const filterOptions = document.querySelectorAll('.filterOption');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const popupButton = document.querySelectorAll('.popupButton');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById('closePopup');

checkboxes.forEach((checkbox,i)=>{
    checkbox.addEventListener('click',()=>{
        if (checkbox.checked)
        filterOptions[i].style.backgroundColor = '#fca100';
        else
        filterOptions[i].style.backgroundColor = '';
    })
})

popupButton.forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        console.log('hello')
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });
})
    closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

const tabButtons = document.querySelectorAll('.tabButton');
const tabPanels = document.querySelectorAll('.tabPanel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to clicked button and corresponding panel
    button.classList.add('active');
    const targetTab = button.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});
