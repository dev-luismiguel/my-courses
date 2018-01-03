package com.example.luismiguel.frasesdodia

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import java.util.*

class MainActivity : AppCompatActivity() {

    lateinit var text: TextView
    val phrases = arrayOf("Frase 1", "Frase 2", "Frase 3")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        text = findViewById(R.id.textPhrase)
    }

    fun generatePhrase(view: View){
        val totalItensArray = phrases.size
        val randomNumber = Random().nextInt(totalItensArray)

        text.setText(phrases[randomNumber])
    }

}
