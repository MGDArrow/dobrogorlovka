<template>
  <section id="team">
    <h2>Команда проекта</h2>
    <ModuleTeamWrapper>
      <ModuleTeamItem :photoSrc="`persona2`">
        <template v-slot:surname>Протоиерей</template>
        <template v-slot:name>Дмитрий Абросимов</template>
        <template v-slot:role>Руководитель проекта</template>
        <template v-slot:description>
          <UiList>
            <li>Священник Русской Православной Церкви;</li>
            <li>Клирик Богоявленского кафедрального собора г. Горловка;</li>
            <li>
              Руководитель Отдела по церковной благотворительности и социальному
              служению Горловской Епархии;
            </li>
            <li>Руководитель Миссионерского отдела Горловской Епархии;</li>
            <li>Лектор российского общества "Знаниие";</li>
            <li>Магистр Богословия.</li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona4`">
        <template v-slot:surname>Хорьяков</template>
        <template v-slot:name>Святослав Владимирович</template>
        <template v-slot:role
          >Координатор проекта, учитель физкультуры</template
        >
        <template v-slot:description>
          <UiList>
            <li>
              Имеет два высших педагогических образования, одно из которых
              преподаватель истории, второе - организатор физкультуры и спорта;
            </li>
            <li>Преподаватель ФГБОУ ВО «ДГПУ им. В. Шаталова».</li>
          </UiList>
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona6`" :type="'line'">
        <template v-slot:surname>Трухачев</template>
        <template v-slot:name>Александр Сергеевич</template>
        <template v-slot:role>Учитель информатики</template>
        <template v-slot:description>
          35 уроков по обучению детей навыкам работы с офисными программами
          Microsoft Office (Word, Excel, PowerPoint)
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona7`" :type="'line'">
        <template v-slot:surname>Павлова</template>
        <template v-slot:name>Вита Викторовна</template>
        <template v-slot:role>Педагог-психолог ЦППМСП г.о Горловка</template>
        <template v-slot:description>
          Проведение 7 встреч на тему кибербуллинга и противостоянию этому
          вредоносному явлению
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona8`" :type="'line'">
        <template v-slot:surname>Протоиерей</template>
        <template v-slot:name>Михаил Фоменко</template>
        <template v-slot:role>Священник</template>
        <template v-slot:description>
          Проведение 5 встреч на тему нравственности и морали в интернете
        </template>
      </ModuleTeamItem>
      <ModuleTeamItem :photoSrc="`persona9`" :type="'line'">
        <template v-slot:surname>Священник</template>
        <template v-slot:name>Евгений Тимофеев</template>
        <template v-slot:role>Учитель информатики</template>
        <template v-slot:description>
          Проведение 2 встреч в формате видеоконференции на тему «совесть в
          режиме инкогнито»
        </template>
      </ModuleTeamItem>
    </ModuleTeamWrapper>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
