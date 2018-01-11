package com.example.luismiguel.app3_alcoholorgasoline

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun btCalculate(view: View){
        val alcoholPrice = edit_alcohol_price.text.toString()
        val gasolinePrice = edit_gasoline_price.text.toString()

        val fieldsOk = validateFields(alcoholPrice, gasolinePrice)
        if (fieldsOk){
            calculateBestPrice(alcoholPrice, gasolinePrice)
        }
        else {
            text_result.text = "First fill the fields"
        }

    }

    fun validateFields(alcoholPrice: String, gasolinePrice: String): Boolean {
        var fieldsOk = true
        if (alcoholPrice == null || alcoholPrice.equals("")){
            fieldsOk = false
        } else if (gasolinePrice == null || gasolinePrice.equals("")) {
            fieldsOk = false
        }

        return fieldsOk
    }

    fun calculateBestPrice(alcoholPrice: String, gasolinePrice: String){
        val valueAlcohol = alcoholPrice.toDouble()
        val valueGasoline = gasolinePrice.toDouble()

        val result = valueAlcohol / valueGasoline

        if (result >= 0.7){
            text_result.text = "Use Gasoline!"
        }
        else{
            text_result.text = "Use Alcohol"
        }

    }
}
