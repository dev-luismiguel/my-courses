package com.example.luismiguel.app5_caraoucoroa

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_result.*

class ResultActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result)

        val result = intent.extras.getInt("number")

        if (result == 0) {
            image_result.setImageResource(R.drawable.moeda_cara)
        }
        else {
            image_result.setImageResource(R.drawable.moeda_coroa)
        }

        button_back.setOnClickListener {
            finish()
        }
    }

}
