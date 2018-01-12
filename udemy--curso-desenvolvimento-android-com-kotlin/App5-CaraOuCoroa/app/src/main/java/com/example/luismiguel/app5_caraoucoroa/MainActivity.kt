package com.example.luismiguel.app5_caraoucoroa

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        image_play.setOnClickListener {

            val number = Random().nextInt(2)

            val intent = Intent(this, ResultActivity::class.java)
            intent.putExtra("number", number)
            startActivity(intent)
        }
    }
}
